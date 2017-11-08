const AppKernel = require('./app/AppKernel');


let kernel = new AppKernel('develop', true);

kernel.listen(3000);

