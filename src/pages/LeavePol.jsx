import React from 'react';

const LeavePol = () => {
    return (
        <div className="w-8/12 mx-auto p-4 my-2">
            <h2 className="text-3xl mb-4 mx-auto w-48 underline font-bold">Leave Policy</h2>
            <p className="mb-4">
            Our company values work-life balance and provides paid time off (PTO) as a benefit to all full-time employees. PTO accrual is based on the length of an employee's service with the company, rewarding loyalty and dedication.
Employees can accrue PTO from their first day of employment, with the accrual rate increasing as they continue to work for the company. This system incentivizes long-term commitment and provides employees with more PTO as they gain experience and seniority.
Employees can use their accrued PTO for a variety of reasons, including vacation, sick leave, or personal time off. This flexibility allows employees to take time off when they need it, whether it's for rest and relaxation, to attend to personal matters, or to recover from illness.
Our goal is to support our employees' well-being and ensure they have the time they need to recharge and take care of themselves. We believe that a well-rested and fulfilled workforce is more productive and engaged, benefiting both the employees and the company as a whole.
            </p>
            <h3 className="text-xl font-bold mb-2">Accrual Rate:</h3>
            <ul className="list-disc pl-6 mb-4">
           <li> New employees accrue PTO at a rate of 1.25 days per month.</li>
    <li>This means they earn 1.25 days of PTO for each full month worked.</li>
    <li>After completing one year of service, the accrual rate increases to 1.5 days per month.</li>
    <li>This rewards employees with more PTO as they continue their tenure.</li>
    <li>Accruals are pro-rated for partial months worked.</li>
    <li>Employees are credited PTO based on the portion of the month worked.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2">Usage:</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>Employees can request PTO through the company's leave management system.</li>
                <li>Requests must be submitted at least [1] days in advance, except in cases of emergency.</li>
                <li>Employees must have enough accrued PTO to cover their requested time off.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2">Approval:</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>All PTO requests are subject to approval by the employee's manager.</li>
                <li>Managers should approve or deny requests within [2] days of submission.</li>
                <li>Managers may consider factors such as workload and team availability when approving requests.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2">Carryover and Payout:</h3>
            <ul className="list-disc pl-6">
                <li>Unused PTO can be carried over to the next year, up to a maximum of [1] days.</li>
                <li>Employees may be eligible for a payout of unused PTO upon termination of employment.</li>
            </ul>
        </div>
    );
};

export default LeavePol;
