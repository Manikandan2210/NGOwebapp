const router = require('express').Router();
const path = require('path');

const ndonationsRoutes = require("./api/ndonaton.routes");
router.use("/donation", ndonationsRoutes)

const details = require("./api/donation.routes");
router.use("/donationdetails", details)

const donorRoutes = require("./api/donor.routes");
router.use("/donor", donorRoutes)

const bankRoutes = require("./api/bank.routes");
router.use("/bank", bankRoutes)

const documentsRoutes = require("./api/documents.routes");
router.use("/Documents", documentsRoutes)

const referenceRoutes = require("./api/reference.routes");
router.use("/reference", referenceRoutes)

const referencepersonRoutes = require("./api/referenceperson.routes");
router.use("/referenceperson", referencepersonRoutes)

const fundRoutes = require("./api/fund.routes");
router.use("/fund", fundRoutes)

const investmentRoutes = require("./api/investment.routes");
router.use("/investment", investmentRoutes)

const investmentformRoutes = require("./api/investmentform.routes");
router.use("/investmentform", investmentformRoutes)

const interestRoutes = require("./api/interest.routes");
router.use("/interest", interestRoutes)

const reportRoutes = require("./api/report.routes");
router.use("/reports", reportRoutes)

const resdetailRoutes = require("./api/resdetail.routes");
router.use("/researcher", resdetailRoutes)

const projectproposalRoutes = require("./api/projectproposal.routes");
router.use("/projectproposal", projectproposalRoutes)

const noofproposalRoutes = require("./api/no_of_proposal.routes");
router.use("/numberofproposal", noofproposalRoutes)

const amountsanctionedRoutes = require("./api/amountsanctioned.routes");
router.use("/amountsanctioned", amountsanctionedRoutes)

const expenseRoutes = require("./api/expensereport.routes");
router.use("/expensereport", expenseRoutes)

module.exports = router;