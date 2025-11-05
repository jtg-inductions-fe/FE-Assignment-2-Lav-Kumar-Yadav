export type Transaction = {
    /**
     * represents user Name related to transaction
     */
    user: string;

    /**
     * date on which transaction have been done
     */
    date: string;

    /**
     * amount of transaction(only positive)
     */
    amount: number;

    /**
     * status of the transaction
     */
    status: 'completed' | 'cancelled' | 'in progress';

    /**
     * payment type of transaction if it is paid by user or refunded to user
     */
    paymentType: 'refund' | 'paid';
};
