const term = document.querySelector('.term');
const definition = document.querySelector('.definition');

const Chapter1 = document.querySelector('.Chapter1');
const Chapter2 = document.querySelector('.Chapter2');
const Chapter3 = document.querySelector('.Chapter3');
const Chapter4 = document.querySelector('.Chapter4');
const Chapter5 = document.querySelector('.Chapter5');
const Chapter6 = document.querySelector('.Chapter6');
const Chapter7 = document.querySelector('.Chapter7');
const Chapter8 = document.querySelector('.Chapter8');
const Chapter9 = document.querySelector('.Chapter9');
const Chapter10 = document.querySelector('.Chapter10');

const checkButton = document.querySelector('.check');
const nextbutton = document.querySelector('.Next');

chapter1 = {
    Project_Charter: "The start document of a project. Lists details such as signature, sponsor, and project manager name.",
    Sponsor: "The person championing the project. This includes marketing, roadblock clearance, and connections person.",
    Benefit_Measurement_Methods: "Provides a means to compare the benefits obtained from project requests by evaluating them using the same criteria. Four common benefit measurement methods are cost-benefit analysis, scoring model, payback period, and economic model.",
    colocated: "Employees work together at the same physical location.",
    constrained_optimization_models: "These are mathematical models. They are typically used in very complex projects and require a detailed understanding of statistics and other mathematical concepts",
    Decision_Models: "A formal method of project selection that helps managers make decisions regarding the use of limited budgets and human resources.",
    Discounted_cash_flow: "Compares the value of the future worth of the project’s expected cash flows to today’s dollars.",
    Economic_Model: "An economic model is a series of financial calculations, also known as cash flow techniques, which provide data on the overall financials of the project.",
    Expert_Judgement: "Relies on the expertise of stakeholders, subject-matter experts, or those who have previous experience to help reach a decision regarding project selection.",
    Feasibility_Study: "Feasibility studies can determine whether the project is doable and likely to succeed. They examine the viability of the product, service, or result of the project. They may also examine technical issues related to the project and determine whether it’s feasible, reliable, and easily assimilated into the organization’s existing infrastructure.",
    Functional_Organization: "The classic organizational structure is the functional organization. A functional organization often goes about the work of the project in a siloed fashion.",
    Internal_Rate_of_Return_IRR: "The discount rate when the present value of the cash inflows equals the original investment.",
    Matrix_Organization: "Organized along departmental lines, like a functional organization, but resources assigned to a project are accountable to the project manager for all work associated with the project.",
    Net_Present_Value: "A cash flow technique that calculates the revenues or cash flows the organization expects to receive over the life of the project in today’s dollars.",
    Operations: "Functions that support the production of goods or services.",
    Payback_Period: "Cash flow technique that identifies the length of time it takes for the organization to recover all the costs of producing the project.",
    Program: "Group of related objects that are managed together using coordinated processes and techniques.",
    Portfolio: "Collections of programs.",
    Projects: "A temporary endeavor that has definite beginning and ending dates and it results in a unique product, service or result.",
    Project_Management: "Brings together a set of tools and techniques—performed by people—to describe, organize, and monitor the work of project activities.",
    Project_Management_Institute: "The Project Management Institute is a U.S.-based not-for-profit professional organization for project management.",
    Project_Management_Knowledge_Areas: "Collections of individual processes that have elements in common.",
    Project_Managers: "The people responsible for applying these tools to the various project activities.",
    Project_Selection_Methods: "Vary depending on the mission of the organization, the people serving on the selection committee, the criteria used, and the project itself.",
    Projectized_Organization: "Focus of the organization is projects, rather than functional work units",
    Scoring_Model: "A predefined list of criteria against which each project is rated."
}

data = Object.entries(chapter1)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)]

    term.innerHTML = `<h3>${randomTerm[0]}</h3>`
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`
}

checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
    }
);

nextbutton.addEventListener('click', function() {
        getRandomWord();
        definition.style.display = 'none';
    }
);