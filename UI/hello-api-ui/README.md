# MUI Starter

This is a starter project for an SPA for internal tooling.

### Upgrading Dependencies

The recommended method of updating dependencies is to use the `npm-check-updates` utility, this can be installed
globally:

```shell
npm install -g npm-check-updates
```

Then to check for updated, open a command shell in the root of project:

To obtain a list of what will be updated:

```shell
npm-check-updates
```

To perform the update:

```shell
npm-check-updates -u
```

To check for any other issues:

```shell
npm audit
```

To apply fixes where appropriate:

```shell
npm audit fix
```

#### References

* [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
* [npm audit](https://docs.npmjs.com/cli/v9/commands/npm-audit)
