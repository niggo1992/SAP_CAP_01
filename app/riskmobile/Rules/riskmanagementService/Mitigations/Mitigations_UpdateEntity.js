export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/riskmobile/Services/riskmanagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/riskmobile/Actions/riskmanagementService/Mitigations/Mitigations_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/riskmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Mitigations'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/riskmobile/Actions/riskmanagementService/Mitigations/Mitigations_UpdateEntity.action');
    }
}