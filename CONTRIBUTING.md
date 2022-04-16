
# Contributing to symma Mobile Wallet

  
## How to contribute

You can contribute to symma Mobile Wallet in various ways, including:  

-  [Reporting bugs or issues](https://github.com/symma/symma-wallet/issues/new) on GitHub. Please make sure to include fill in all the details in the issue template to make sure the issue can be addressed as quickly as possible.

-  Submitting improvements to the documentation
Updates, enhancements, new guides, spelling fixes...

- Helping other people on the [discussions](https://github.com/symma/symma-wallet/discussions).

- Looking at existing [issues](https://github.com/symma/symma-wallet/issues) and adding more information, particularly helping to reproduce the issues.

-  [Submitting a pull request](https://github.com/symma/symma-wallet/pulls) with a bug fix or an improvement.

  

## symma Mobile Wallet repository

  

The [symma Mobile Wallet GitHub repository](https://github.com/symma/symma-wallet) contains the packages that make up symma Mobile Wallet.

  
### Branches

The `develop` branch of the repository should be kept releasable at any time, even if it is not the realease branch.

Keeping the `develop` releasable means that changes merged to it need to be:

-  **Backwards compatible**: symma Mobile Wallet should work with _every currently supported symma Wallet version_. If the code you're adding depends on a feature only present in newer or unreleased symma Wallet versions, it needs to check which version is being used and not assume the latest version is being used.

-  **Non-breaking**: If code that is unreleasable or fails the test suite ends up in `develop`, it should be reverted.

-  **Tested**: Always include a test plan in pull requests. Do not merge code that doesn't pass all automated tests.

  

## Submitting a pull request

To submit a pull request:  

1. Fork the [repository](https://github.com/symma/symma-wallet) and create a feature branch. (Existing contributors can create feature branches without forking. Prefix the branch name with `@your-github-username/`.)

2. Write the description of your pull request. Make sure to include a test plan and test your changes.

3. Wait for a review and adjust the code if necessary.