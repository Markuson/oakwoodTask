const { expect } = require ('chai')
const logic = require('./')
const list = require('../assets/repoList')

let index = 0;
let wrongIndex = undefined

describe('Logic', () => {

    describe('getRepoInfo', () => {
        it('should succeed on geting repo information', async () => {

            const res = await logic.getRepoInfo(index)
            expect(res).to.exist
            expect(res.description).to.exist
            expect(typeof res.description).to.equal('string')
            expect(res.full_name).to.exist
            expect(typeof res.full_name).to.equal('string')
            expect(res.full_name).to.equal(list[index])
            expect(res.stargazers_count).to.exist
            expect(typeof res.stargazers_count).to.equal('number')
        })

        it('should fail on index bigger than list length', async () => {
            index = 99
            try {
                const res = await logic.getRepoInfo(index)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`ERROR! index ${index} is not a valid index. maximum index value could be ${list.length - 1}`)
            }
        })

        it('should fail on not valid index', async () => {
            wrongIndex='wrongIndex'
            try {
                const res = await logic.getRepoInfo(wrongIndex)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`index ${wrongIndex} is not a number`)
            }
        })

        it('should fail on empty index', async () => {
            wrongIndex=''
            try {
                const res = await logic.getRepoInfo(wrongIndex)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`index ${wrongIndex} is not a number`)
            }
        })

        it('should fail on undefined index', async () => {
            wrongIndex=undefined
            try {
                const res = await logic.getRepoInfo(wrongIndex)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`index is not optional`)
            }
        })

        it('should fail on null index', async () => {
            wrongIndex=null
            try {
                const res = await logic.getRepoInfo(wrongIndex)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`index is not optional`)
            }
        })

    })
})