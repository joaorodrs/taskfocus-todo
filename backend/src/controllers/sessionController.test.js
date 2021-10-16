const sessionController = require("./sessionController")
// @ponicode
describe("sessionController.create", () => {
    test("0", async () => {
        await sessionController.create({ body: "Edmond" }, { status: () => 200, json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("1", async () => {
        await sessionController.create({ body: "Jean-Philippe" }, { status: () => 500, json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("2", async () => {
        await sessionController.create({ body: "George" }, { status: () => 500, json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("3", async () => {
        await sessionController.create({ body: "Jean-Philippe" }, { status: () => 200, json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("4", async () => {
        await sessionController.create({ body: "Jean-Philippe" }, { status: () => 429, json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("5", async () => {
        await sessionController.create(undefined, { status: () => NaN, json: () => "" })
    })
})
