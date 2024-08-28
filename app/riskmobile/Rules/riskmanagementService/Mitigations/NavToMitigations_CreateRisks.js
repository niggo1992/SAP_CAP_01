export default function NavToCreate(clientAPI) {
    if (clientAPI.getODataProvider('/riskmobile/Services/riskmanagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/riskmobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Mitigations'
                },
                'OnSuccess': '/riskmobile/Actions/riskmanagementService/Mitigations/NavToMitigations_CreateRisks.action'
            }
        });
    } else {
        return clientAPI.executeAction('/riskmobile/Actions/riskmanagementService/Mitigations/NavToMitigations_CreateRisks.action');
    }
}