const Controller = require('wardrobe').Controller;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @Swig()
     * @param request
     */
    indexAction (request)
    {
        return {
            base_dir: fs.realpathSync(this.getContainer().getParameter('project_dir'))
        };
    }
}

module.exports = DefaultController;