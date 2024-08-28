export default function CreateRelatedEntity(clientAPI) {
    if (clientAPI.getODataProvider('/riskmobile/Services/riskmanagementService.service').isDraftEnabled('Mitigations')) {
        let readLink = clientAPI.binding['@odata.readLink'];
        return clientAPI.executeAction({
            'Name': '/riskmobile/Actions/riskmanagementService/Mitigations/Mitigations_CreateRisks.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/riskmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Mitigations',
                        'ReadLink': readLink
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/riskmobile/Actions/riskmanagementService/Mitigations/Mitigations_CreateRisks.action');
    }
}