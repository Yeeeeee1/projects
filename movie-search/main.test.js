test('adding floating point numbers', () => {
    const value = 0.1 + 0.1;
    expect(value).toBeCloseTo(0.2);
  });

  test('adding numbers', () => {
    const value = 2 + 2;
    expect(value).toBeCloseTo(4);
  });

  test('adding big numbers', () => {
    const value = 50 + 50;
    expect(value).toBeCloseTo(100);
  });