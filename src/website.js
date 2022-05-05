import displayController from "./display_controller";


const WebsiteController = ((displayController) => {

    const initializeWebsite = () => {
        displayController.InitializeWebsiteLayout();
    }

    return {initializeWebsite};
})(displayController);



export default WebsiteController;