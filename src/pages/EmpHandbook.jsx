import React from 'react';

const EmpHandbook = () => {
    return (
        <div className="max-w-2xl mx-auto p-4 my-2">
            <h1 className="text-3xl font-bold mb-4 w-6/12 mx-auto underline">Employee Handbook</h1>
            <h2 className="text-2xl font-bold mb-2">1. Accrual and Usage</h2>
            <p className="mb-4">
                Employees accrue paid time off (PTO) based on their years of service. 
                New employees accrue PTO at a rate of 1.25 days per month, which increases 
                to 1.5 days per month after one year of service. Accruals are pro-rated 
                for partial months worked.
            </p>
            <h2 className="text-2xl font-bold mb-2">2. Requesting Time Off</h2>
            <p className="mb-4">
                Employees must request time off through the company's leave management system. 
                Requests should be submitted at least [2] days in advance, except in cases of 
                emergency. Managers will review and approve or deny requests based on workload 
                and team availability.
            </p>
            <h2 className="text-2xl font-bold mb-2">3. Leave Balances and Carryover</h2>
            <p className="mb-4">
                Employees can view their PTO balances in the leave management system. Unused 
                PTO can be carried over to the next year, up to a maximum of [1] days. Upon 
                termination of employment, employees may be eligible for a payout of unused PTO.
            </p>
            <h2 className="text-2xl font-bold mb-2">4. Sick Leave and Other Types of Leave</h2>
            <p className="mb-4">
                In addition to PTO, employees may be eligible for sick leave and other types 
                of leave as per company policy. Details on eligibility and usage can be found 
                in the employee handbook.
            </p>
            <h2 className="text-2xl font-bold mb-2">5. Contact Information</h2>
            <p className="mb-4">
                For questions or assistance regarding leave management, employees can contact 
                the HR department at [hr@mail.com].
            </p>
        </div>
    );
};

export default EmpHandbook;
