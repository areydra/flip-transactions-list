export default class Transactions{
    constructor(id, amount, unique_code, status, sender_bank, account_number, beneficiary_name, beneficiary_bank, remark, created_at, completed_at, fee){
        this.id = id,
        this.amount = amount,
        this.unique_code = unique_code,
        this.status = status,
        this.sender_bank = sender_bank,
        this.account_number = account_number,
        this.beneficiary_name = beneficiary_name,
        this.beneficiary_bank = beneficiary_bank,
        this.remark = remark,
        this.created_at = created_at,
        this.completed_at =completed_at,
        this.fee = fee
    }
}