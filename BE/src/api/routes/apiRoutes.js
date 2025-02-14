import * as express from 'express';
import TestController from '../controllers/TestController.js';
import UserController from '../controllers/UserController.js';
import PageController from '../controllers/PageController.js';
import CountryController from '../controllers/CountryController.js';
import NotificationController from '../controllers/NotificationController.js';
import ProductController from '../controllers/ProductController.js';
import TagController from '../controllers/TagController.js';
import ShippingController from '../controllers/ShippingController.js';
import userModel from '../models/User.js';
import OrderController from "../controllers/OrderController.js";
import SupportController from '../controllers/SupportController.js';
import PaymentController from "../controllers/PaymentController.js";
import BuyerController from "../controllers/BuyerController.js";
import SellerController from "../controllers/SellerController.js";
import DashboardController from "../controllers/DashboardController.js";
import PaymentPlanController from "../controllers/PaymentPlanController.js";
import CheckoutController from "../controllers/CheckoutController.js";
import ContactUsController from "../controllers/ContactUsController.js";
import StoreController from "../controllers/StoreController.js";
import ClinicController from "../controllers/ClinicController.js";


const apiRoutes = express.Router();

apiRoutes.use(express.json({
    inflate: true,
    limit: '512kb',
    strict: true
}));

apiRoutes.route('/post-test').get(TestController.testData);
apiRoutes.route('/post-test').post(TestController.testData);
apiRoutes.route('/upload').post(TestController.uploadFile);
apiRoutes.route('/invoice').get(OrderController.generateInvoice);

apiRoutes.route('/countries').get(CountryController.getAll);
/*********************************************
 /***************JOB ROUTES********************
 /*********************************************/
apiRoutes.route('/check-subscription-for-update').get(UserController.fetchSubscriptionsForUpdate);
apiRoutes.post('/update-subscription-plan-job', UserController.updateSubscriptionPlanJob);
apiRoutes.get('/update-subscription-plan-job', UserController.updateSubscriptionPlanJob);
apiRoutes.get('/subscription-recurring-payment', UserController.getSubscriptionRecurringPaymentJob);


apiRoutes.route('/pages/all').get(PageController.getAll);
apiRoutes.route('/pages').get(PageController.getPage);
apiRoutes.route('/create-orders').get(OrderController.createOrders);
apiRoutes.route('/orders/remove-item-order').get(OrderController.removeOrderItem);
apiRoutes.route('/orders/minus-item-order').get(OrderController.minusOrderItem);
apiRoutes.route('/order/get-config-qty').get(OrderController.getProductConfigQty);
apiRoutes.route('/order/update-qty-after-wait').get(OrderController.updateConfigQtyAfterWait);
apiRoutes.route('/order/remove-wait-from-item').get(OrderController.removeWaitItemStatus);
apiRoutes.route('/check-user-to-stores').get(OrderController.compareFromOrder);

apiRoutes.route('/check-payment-status').post(UserController.checkPaymentStatus);
apiRoutes.route('/subscription').post(UserController.createUserFromSubscription);
apiRoutes.route('/payment-plans').get(PaymentPlanController.fetchItems);
apiRoutes.route('/get-plan-info').get(PaymentPlanController.fetchPlanInfo);
apiRoutes.route('/create-payment-intent').post(PaymentPlanController.stripeClientSecret);
apiRoutes.route('/contact-us').post(ContactUsController.sendMessage);
apiRoutes.route('/request-demo').post(ContactUsController.requestDemo);
apiRoutes.route('/open-browser').post(OrderController.openBrowser);

/** ===================================================================== */
/** ================== AUTHENTIFICATED ROUTES =========================== */
/** ===================================================================== */
apiRoutes.use(async (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const decodedJsonObjectString = Buffer.from(bearer[1], 'base64').toString('ascii');
        const decodedJsonObject = decodedJsonObjectString.split(':');
        req.user = await userModel.findUserByEmail(decodedJsonObject[0]);
        // console.log('USER ID', req.user)
        next();
    } else {
        res.status(401).json({ code: 401, message: 'Do not have permissions' });
        next();
    }
});

// CLINIC ROUTES
apiRoutes.route('/fetch-clinics').get(ClinicController.fetchData);
apiRoutes.route('/fetch-clinic/:id').get(ClinicController.fetchItem);
apiRoutes.route('/clinic').post(ClinicController.addClinic);


apiRoutes.post('/request-platinum', UserController.sendRequestPlatinum);
apiRoutes.post('/changePassword', UserController.changePassword);
apiRoutes.get('/profile/subscription', UserController.getSubscription);
apiRoutes.post('/profile/delete-payment-method', UserController.deletePaymentMethod);
apiRoutes.post('/profile/default-payment-method', UserController.defaultPaymentSetup);
apiRoutes.post('/profile/add-payment-method-from-subscription', UserController.addPaymentMethodFromSubscription);
apiRoutes.post('/profile/add-payment-method-after-registration', UserController.addPaymentMethodAfterRegistration);
apiRoutes.post('/profile/add-payment-method', UserController.addPaymentMethod);
apiRoutes.get('/profile/set-locale', UserController.setUserLocale);
apiRoutes.post('/profile/set-locale', UserController.setUserLocale);
apiRoutes.post('/profile/update-subscription-plan', UserController.upgradeSubscription);
apiRoutes.get('/profile/unsubscription', UserController.cancelSubscription);
apiRoutes.get('/profile/generate-stripe-invoice', UserController.generateInvoice);
apiRoutes.route('/profile/order-comment')
    .get(OrderController.fetchOrderByComment);
apiRoutes.route('/profile')
    .post(UserController.updateProfile)
    .get(UserController.getProfile);
apiRoutes.route('/address')
    .post(UserController.saveAddress);
apiRoutes.route('/address-seller')
    .post(UserController.saveAddressSeller);
apiRoutes.route('/fetch-notifications').get(NotificationController.fetchData);
apiRoutes.route('/count-notice').get(NotificationController.fetchNew);
apiRoutes.route('/new-notice').get(NotificationController.fetchLatest);




apiRoutes.route('/fetch-stores').get(StoreController.fetchData);
apiRoutes.route('/products/fetch-additional').get(ProductController.fetchAdditional);
apiRoutes.route('/fetch-product/:id').get(ProductController.fetchProduct);
apiRoutes.route('/fetch-products').get(ProductController.fetchData);
apiRoutes.route('/products/copy/:id').get(ProductController.copyRow);
apiRoutes.route('/products/delete/:id').delete(ProductController.deleteRow);
apiRoutes.route('/products/photo-delete/:id').post(ProductController.deletePhoto);
apiRoutes.route('/products/bulk-delete').post(ProductController.bulkDelete);
apiRoutes.route('/products/bulk-copy').post(ProductController.bulkCopy);
apiRoutes.route('/products/import').post(ProductController.import);
apiRoutes.route('/products/find').get(ProductController.find);

apiRoutes.route('/orders/find-order-by-comment').get(OrderController.findOrderByCommentId);
apiRoutes.route('/orders/find-wait-order-by-comment').get(OrderController.findWaitOrderByCommentId);
apiRoutes.route('/orders/find-order-by-db-id').get(OrderController.findWaitOrderById);

apiRoutes.route('/tags/find').get(TagController.fetchTags);


apiRoutes.route('/orders/connect-bycomment').get(OrderController.fetchOrderByComment);
apiRoutes.route('/orders/fetch-items').get(OrderController.fetchItems);
apiRoutes.route('/orders/fetch-waiting-items').get(OrderController.fetchWaitingList);
apiRoutes.route('/orders/fetch-filters').get(OrderController.fetchFilters);
apiRoutes.route('/create-order/:id/:locale/:type').get(OrderController.generateInvoice);
apiRoutes.route('/create-order/:id/:locale').get(OrderController.generateInvoice);
apiRoutes.route('/create-order/:id/').get(OrderController.generateInvoice);
apiRoutes.route('/orders/bulk-shipping').post(OrderController.setupShipped);
apiRoutes.route('/orders/bulk-cancel').post(OrderController.bulkCancel);
apiRoutes.route('/orders/bulk-download').post(OrderController.bulkDownload);
apiRoutes.route('/orders/single-download').post(PaymentController.downloadInvoice);
apiRoutes.route('/order/run-wait-workflow').post(OrderController.runWaitWorkflow);

apiRoutes.route('/payments/fetch-items').get(PaymentController.fetchItems);
apiRoutes.route('/payments/fetch-item').get(PaymentController.fetchItem);
apiRoutes.route('/payments/fetch-methods').get(PaymentController.fetchMethods);
apiRoutes.route('/payments/change-methods-statuses').patch(PaymentController.changeMethodsStatuses);
apiRoutes.route('/payments/fetch-filters').get(PaymentController.fetchFilters);
apiRoutes.route('/payments/download-invoice/:orderNumber/:locale').get(PaymentController.downloadInvoice);

apiRoutes.route('/buyers/fetch-items').get(BuyerController.fetchItems);
apiRoutes.route('/buyers/fetch-item').get(BuyerController.fetchItem);
apiRoutes.route('/buyers/fetch-filters').get(BuyerController.fetchFilters);

apiRoutes.route('/sellers/fetch-items').get(SellerController.fetchItems);
apiRoutes.route('/sellers/fetch-filters').get(SellerController.fetchFilters);
apiRoutes.route('/sellers/update-percent').post(SellerController.updatePercent);
apiRoutes.route('/sellers/history').get(SellerController.percentHistory);
apiRoutes.route('/sellers/unsubscribe').post(SellerController.unsubscribe);

apiRoutes.route('/users/find-seller').get(UserController.fetchSellers);
apiRoutes.route('/users/find-buyer').get(UserController.fetchBuyers);
apiRoutes.route('/dashboard/fetch-items').get(DashboardController.fetchItems);

apiRoutes.route('/support/send-message').post(SupportController.sendMessage);

apiRoutes.route('/fetch-settings').get(UserController.fetchSettings);
apiRoutes.route('/update-settings').post(UserController.updateSettings);
apiRoutes.route('/update-link-settings').post(UserController.updateLinksSettings);
apiRoutes.route('/update-file-settings').post(UserController.updateFilesSettings);
apiRoutes.route('/remove-settings-file').get(UserController.removeFilesSettings);

// apiRoutes.route('/payment-plans').get(PaymentPlanController.fetchItems);
apiRoutes.route('/payment-plans').post(PaymentPlanController.updateStatus);
apiRoutes.route('/payment-stripe-plans').get(PaymentPlanController.fetchStripeProducts);
apiRoutes.route('/sync-stripe').post(PaymentPlanController.syncStripe);
apiRoutes.route('/order/update-config-qty').post(OrderController.updateProductConfigQty);


apiRoutes.route('/checkout').get(CheckoutController.fetch);
apiRoutes.route('/checkout/fetch-shipping-methods').get(CheckoutController.fetchShippingMethodsByCountry);
apiRoutes.route('/checkout').post(CheckoutController.chechoutSubmit);
apiRoutes.route('/checkout/confirm').post(CheckoutController.chechoutComfirmation);
apiRoutes.route('/orders/insert-status').get(OrderController.insertStatus);
apiRoutes.route('/orders/expire').get(OrderController.expireOrder);

//FB routes
apiRoutes.route('/fb-authenticate').post(UserController.syncFb);

apiRoutes.route('/exist-user-subscription').post(UserController.createExistUserSubscription);
apiRoutes.route('/after-skip-subscription').post(UserController.createAfterSkipSubscription);
apiRoutes.route('/skip-exist-user-subscription').post(UserController.skipExistUserSubscription);
apiRoutes.route('/skip-exist-user-subscription-new').post(UserController.skipExistUserSubscriptionNew);

apiRoutes.route('/shipping/create').post(ShippingController.create);
apiRoutes.route('/shipping/fetch-all').get(ShippingController.fetchAll);
apiRoutes.route('/shipping/fetch/:id').get(ShippingController.fetch);
apiRoutes.route('/shipping/update/:id').post(ShippingController.update);
apiRoutes.route('/shipping/delete/:id').delete(ShippingController.delete);
apiRoutes.route('/shipping/save-countries/:id').post(ShippingController.saveCountries);
apiRoutes.route('/shipping/change-statuses').put(ShippingController.changeStatuses);
apiRoutes.route('/shipping/change-status/:id').put(ShippingController.changeStatus);
apiRoutes.route('/shipping/threshold').post(ShippingController.setThreshold);
apiRoutes.route('/shipping/threshold').get(ShippingController.fetchThreshold);
apiRoutes.route('/shipping/threshold').get(ShippingController.fetchThreshold);
apiRoutes.route('/shipping/free-period').post(ShippingController.setShippingPeriod);
apiRoutes.route('/shipping/clear-free-period').post(ShippingController.clearShippingPeriod);




apiRoutes.get('/*', defaultHandler);

export default apiRoutes;

// Default handler for unknown routes
function defaultHandler(req, res) {
    res.status(404).send('Unknown API endpoint');
}
