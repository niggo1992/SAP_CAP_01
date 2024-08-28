export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/riskmobile/Services/riskmanagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/riskmobile/Actions/riskmanagementService/Risks/Risks_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/riskmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Risks',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/riskmobile/Actions/riskmanagementService/Risks/Risks_CreateEntity.action');
    }
}