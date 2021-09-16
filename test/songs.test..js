const expect = require("chai").expect;

// Test Data
const sauce1 = {
    type: "欧美",
    title: "Endless Road",
    songs_time: "03:21",
    author: "Jack"
};
const sauce2 = {
    type: "欧美",
    title: "Endless Road",
    songs_time: "03:21",
    author: "Jack"
};


describe("测试songs", function () {
    describe('字段', function () {
        it('type', function () {
            expect(sauce1.type).to.have.length.below(80);
        });
        it('title', function () {
            expect(sauce1.title).to.have.length.below(80);
            expect(sauce1.title).to.not.empty
        });
        it('author', function () {
            expect(sauce1.author).to.have.length.below(100);
            expect(sauce1.author).to.not.empty
        });
    });
})
