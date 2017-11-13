const Controller = require('@wardrobe/wardrobe').Controller;

/**
 * @Route(hostname="*")
 */
class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @param request
     */
    async indexAction (request)
    {
        return this.render('@AppBundle://default/index.html.twig', {
            base_dir: this.getContainer().getParameter('project_dir')
        });
    }
}

module.exports = DefaultController;