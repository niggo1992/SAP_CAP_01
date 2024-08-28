export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/riskmobile/Services/riskmanagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/riskmobile/Actions/riskmanagementService/Risks/Risks_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/riskmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Risks'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/riskmobile/Actions/riskmanagementService/Risks/Risks_UpdateEntity.action');
    }
}