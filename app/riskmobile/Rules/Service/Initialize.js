export default function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _riskmanagementService = context.executeAction('/riskmobile/Actions/riskmanagementService/Service/InitializeOnline.action');

    //You can add more service initialize actions here

    return Promise.all([_riskmanagementService]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/riskmobile/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}