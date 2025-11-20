#!/bin/sh

# Ensure ~/bin is exported for the current shell and future sessions.
ensure_user_bin_in_path() {
  user_shell=${SHELL##*/}
  rc_path=""
  ensure_line='export PATH="$HOME/bin:$PATH"'
  shell_comment='# Added by Nu build.sh to include ~/bin in PATH'

  case "$user_shell" in
    bash)
      rc_path="$HOME/.bashrc"
      ;;
    zsh)
      rc_path="$HOME/.zshrc"
      ;;
    ksh)
      rc_path="$HOME/.kshrc"
      ;;
    fish)
      rc_path="$HOME/.config/fish/config.fish"
      ensure_line='set -gx PATH $HOME/bin $PATH'
      shell_comment='# Added by Nu build.sh to include ~/bin in PATH (fish shell)'
      ;;
    *)
      if [ -n "$user_shell" ] && [ -f "$HOME/.${user_shell}rc" ]; then
        rc_path="$HOME/.${user_shell}rc"
      elif [ -f "$HOME/.profile" ]; then
        rc_path="$HOME/.profile"
      else
        rc_path="$HOME/.bashrc"
      fi
      ;;
  esac

  ensure_line='export PATH="$HOME/bin:$PATH"'

  if [ -n "$rc_path" ]; then
    if [ ! -f "$rc_path" ]; then
      mkdir -p "$(dirname "$rc_path")"
      touch "$rc_path"
    fi

    need_refresh=0

    if ! grep -Fq "$ensure_line" "$rc_path"; then
      {
        printf '\n%s\n' "$shell_comment"
        printf '%s\n' "$ensure_line"
      } >> "$rc_path"
      need_refresh=1
    fi

    if [ "$need_refresh" -eq 1 ] && [ -n "$SHELL" ] && command -v "$SHELL" >/dev/null 2>&1; then
      if [ "$user_shell" = "fish" ]; then
        "$SHELL" -c "source \"$rc_path\"" >/dev/null 2>&1 || true
      else
        "$SHELL" -c ". \"$rc_path\"" >/dev/null 2>&1 || \
        "$SHELL" -c "source \"$rc_path\"" >/dev/null 2>&1 || true
      fi
    fi
  fi

  export PATH="$HOME/bin:$PATH"
}

ensure_user_bin_in_path

aclocal
autoconf
automake --add-missing
./configure
sudo make install
