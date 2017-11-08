const Controller = require('wardrobe').Controller;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @param request
     */
    indexAction (request)
    {
        return this.render('@App://views/default/index.html.twig', {
            base_dir: fs.realpathSync(this.getContainer().getParameter('project_dir'))
        });
    }

}

module.exports = DefaultController;