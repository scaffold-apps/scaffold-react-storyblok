const inquirer = require('inquirer')
const shell = require('shelljs')
const chalk = require('chalk')

const setup = async () => {
    const { hasToken } = await inquirer.prompt({
        type: 'confirm',
        message: 'Do you have your storyblok preview token? (This is necessary to link with storyblok)',
        name: 'hasToken'
    })

    if (hasToken) {
        const { token } = await inquirer.prompt({
            type: 'input',
            message: 'Enter your preview token',
            name: 'token'
        })

        shell.exec(`echo REACT_APP_APOLLO_CLIENT_TOKEN=${token} > .env`)

        console.log(chalk.green('\n.env file created\n'))
    } else {
        console.log('\n' + chalk.yellow(`When you obtain your token, create a .env file at the root
of this directory with REACT_APP_APOLLO_CLIENT_TOKEN set
to your token`) + '\n')
    }
}

setup()