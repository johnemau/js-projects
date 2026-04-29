# What
A CLI (Command Line Interface) program that takes in a name and timezone and outputs a personalized greeting and the local time.

# Why (Introduction/User-Faceing problem solved)
Many applications today interact with users in different timezones, these applications can encourage user interactions by presenting a friendly greeting with the local time.

# Requirments (Goals/Non-Goals)
* Support for Node v22+
* Command line program named `greet-cli`.
* First argument is the _name_ of type `string`. 
* Second argument is the _timezone_ of type `string`, any [IANA timezone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) is supported.

## Example
```cmd
> greet-cli Andy PST 
Good afternoon Andy, the time is 4:52 PM
```

# Design (Technical Details)
* Leverage node.js APIs
  * [process.argv](https://nodejs.org/docs/latest-v22.x/api/process.html#processargv) to get values.
  * Use `Date.toLocalTimeString` to generate formatted time.
  * Supported timezones: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets
* Implement in a single script- keep it simple
* Create an npm package with "bin" property to run from npx

# Assumptions
* Program will run easily with anyone who installs Node v22+
* npm will make program distribution simple

# Unknowns (Open Questions)
* How to distribute the program without uploading to npm.

# Timeline (How long will it take)
3 hours
