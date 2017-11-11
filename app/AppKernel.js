const Kernel = require('@wardrobe/wardrobe').Kernel;

class AppKernel extends Kernel
{
    registerBundles ()
    {
        return [
            require('@wardrobe/swigbundle'),
            require('@wardrobe/databasebundle'),
            require('../src/AppBundle/AppBundle'),
        ];
    }

    registerContainerConfiguration (loader)
    {
        loader.load(path.join(__dirname, 'config', 'config.yml'));
    }

}

module.exports = AppKernel;