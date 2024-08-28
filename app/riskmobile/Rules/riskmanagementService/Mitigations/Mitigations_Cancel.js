export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/riskmobile/Services/riskmanagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/riskmobile/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Mitigations'
                },
                'OnSuccess': '/riskmobile/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/riskmobile/Actions/CloseModalPage_Cancel.action');
    }
}