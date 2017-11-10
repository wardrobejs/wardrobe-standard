const Kernel = require('wardrobe').Kernel;

class AppKernel extends Kernel
{
    registerBundles ()
    {
        return [
            require('wardrobe').SwigBundle,
            require('wardrobe').AssetBundle,
            require('../src/AppBundle/AppBundle'),
        ];
    }

    registerContainerConfiguration (loader)
    {
        loader.load(path.join(__dirname, 'config', 'config.yml'));
    }

}

module.exports = AppKernel;