const ghpages = require('gh-pages');

ghpages.publish(
    '/export/chemistry',
    {
        branch: 'master',
        repo: 'https://github.com/theswerd/chemistry.git',
        user: {
            name: 'theswerd',
            email: 'swerdlowbenjamin@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)