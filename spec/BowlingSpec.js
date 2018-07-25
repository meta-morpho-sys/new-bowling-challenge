describe('Bowling', () => {
  const bowling = new Bowling();

  it('rolls', () => {
    expect(bowling.roll()).toEqual('Rolling!');
  });
});
