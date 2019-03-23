import { AddHoursPipe } from './add-hours.pipe';

describe('AddHoursPipe', () => {
  it('create an instance', () => {
    const pipe = new AddHoursPipe();
    expect(pipe).toBeTruthy();
  });
});
