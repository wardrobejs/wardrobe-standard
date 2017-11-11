const Controller = require('@wardrobe/wardrobe').Controller;
const User = require('../Entity/User');

/**
 * @Route(hostname="*")
 */
class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @Swig()
     * @param request
     */
    async indexAction (request)
    {
        return {
            base_dir: this.getContainer().getParameter('project_dir')
        };
    }
}

module.exports = DefaultController;