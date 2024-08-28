export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/riskmobile/Services/riskmanagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/riskmobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risks'
                },
                'OnSuccess': '/riskmobile/Actions/riskmanagementService/Risks/NavToRisks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/riskmobile/Actions/riskmanagementService/Risks/NavToRisks_Edit.action');
    }
}