
#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.white('Vikram Kumar'),
  handle:  chalk.cyan('@vikram_spidy'),
  work: chalk.white('Interactive Application Developer at Believe Creative'),
  twitter: chalk.cyan('https://twitter.com/vikram_spidy'),
  github: chalk.cyan('https://github.com/vikramarka/'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/vikram-kumar-62829846/'),
  npx: chalk.white('npx vikram'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelCard: chalk.white.bold('      Card:')
}

const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
