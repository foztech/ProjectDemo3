describe('player', ()=> {
    it('should be green', ()=> {
        expect(context.fillStyle("green").toEqual(true));
        expect(context.fillStyle("red").toEqual(false));
    }
})