const Kernel = require('wardrobe').Kernel;

class AppKernel extends Kernel
{
    registerBundles ()
    {
        return [
            require('../src/AppBundle/App')
        ];
    }

    registerContainerConfiguration (loader)
    {
        loader.load(path.join(__dirname, 'config', 'config.yml'));
    }

}

module.exports = AppKernel;