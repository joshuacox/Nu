# Repository Guidelines

## Project Structure & Module Organization
The repository is lightweight by design: the primary Bash entrypoint lives at `Nu`, while autotools metadata (`configure.ac`, `Makefile.am`, and generated `Makefile.in`) drive installation. Use `build.sh` for the canonical bootstrap sequence, and keep it in sync with any procedural changes. Installation drops helper scripts into `~/bin` and mount points under `~/mnt`, so document any new runtime directories in both the script and `README.md`.

## Build, Test, and Development Commands
- `./build.sh`: runs the full autotools chain (`aclocal`, `autoconf`, `automake`, `./configure`, `sudo make install`) to install system-wide.
- `./configure && make`: rebuilds artifacts after editing autotools inputs; omit `sudo make install` when testing locally.
- `bash -n Nu`: fast syntax check for the Bash script.
- `shellcheck Nu`: static analysis; resolve warnings before opening a PR.

## Coding Style & Naming Conventions
Target POSIX-compatible Bash with `#!/usr/bin/env bash`. Indent with two spaces for control blocks, prefer uppercase snake case for configuration variables (`SERVERNAME`, `PORT`), and keep helper functions (if added) in lowercase with hyphenated names (`mount-remote`). Wrap user-facing messages at 100 columns and reuse existing phrasing for consistency. Any new scripts placed in `~/bin` must follow the `Mount<Server>` or `<Server>` naming pattern already established.

## Testing Guidelines
No automated test suite exists yet; rely on defensive scripting. Run `bash -n` and `shellcheck` before committing, then perform an end-to-end dry run with a non-production host (`Nu TestBox user localhost 22`) to confirm scaffolded scripts behave as expected. Document new manual test cases in `README.md` or add a `docs/testing.md` entry if scenarios become verbose.

## Commit & Pull Request Guidelines
Write commit subjects in the imperative mood (`Add shellcheck guard`) and keep bodies focused on the “why.” Reference related issues with `Fixes #123` when applicable. PRs should summarize behavioural changes, list verification steps (`bash -n`, `shellcheck`, manual run), and call out any dependencies (e.g., requirement for `sshfs`). Include screenshots or terminal captures only when they clarify a workflow change.

## Security & Configuration Tips
Never commit real hostnames, usernames, or SSH keys. Use placeholders like `example-host` in documentation and sanitize shell outputs before attaching logs. Remind contributors that `~/bin` may already contain user scripts; avoid destructive operations and gate any future cleanup logic behind explicit prompts.
