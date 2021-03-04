import { ResolverData } from 'type-graphql';
import { authChecker, Context, getTokenFromRequest, JwtPayload } from './auth';
import { UserRole } from '../models/User';

function reqGet(header: string) {
  return this.headers?.[header];
}

const mockedRequestWithCookie = (cookie: string) => ({
  headers: {
    cookie,
  },
  get: reqGet,
});

const mockedUser = (roles: UserRole[] = []) => ({
  id: '12ab23',
  roles,
  username: 'Bob',
});

const mockedContext = (user: JwtPayload) =>
  ({ context: { user } } as ResolverData<Context>);

describe('getTokenFromRequest()', () => {
  it('should return a token if present in cookies', () => {
    const cookie1 = 'key=val next-auth.session-token=ab12.cd34.ef56 key2=v.a.l';
    const cookie2 = 'auth.session-token=12 next-auth.session-token=hello123!';
    const cookie3 = 'key=val key2=v.a.l next-auth.session-token=.....';
    const cookie4 = ' next-auth.session-token=x  ';
    const token1 = getTokenFromRequest(mockedRequestWithCookie(cookie1));
    const token2 = getTokenFromRequest(mockedRequestWithCookie(cookie2));
    const token3 = getTokenFromRequest(mockedRequestWithCookie(cookie3));
    const token4 = getTokenFromRequest(mockedRequestWithCookie(cookie4));
    expect(token1).toBe('ab12.cd34.ef56');
    expect(token2).toBe('hello123!');
    expect(token3).toBe('.....');
    expect(token4).toBe('x');
  });

  it('should return empty if no token in cookies', () => {
    const cookie1 = 'session-token=hey';
    const cookie2 = 'token=hey';
    const token1 = getTokenFromRequest(mockedRequestWithCookie(cookie1));
    const token2 = getTokenFromRequest(mockedRequestWithCookie(cookie2));
    expect(token1).toBeUndefined();
    expect(token2).toBeUndefined();
  });

  it('should return empty if no cookies', () => {
    const mockedRequestWithoutCookie = {
      headers: {},
      get: reqGet,
    };
    const token = getTokenFromRequest(mockedRequestWithoutCookie);
    expect(token).toBeUndefined();
  });
});

describe('authChecker()', () => {
  it('should return false if no user and no auth roles', () => {
    const authed = authChecker(mockedContext(null), []);
    expect(authed).toEqual(false);
  });

  it('should return false if no user and specified auth role', () => {
    const authed = authChecker(mockedContext(null), [UserRole.USER]);
    expect(authed).toEqual(false);
  });

  it('should return true if user exists and no auth roles', () => {
    const user = mockedUser();
    const authed = authChecker(mockedContext(user), []);
    expect(authed).toEqual(true);
  });

  it('should return true if user role matches auth role', () => {
    const user = mockedUser([UserRole.ADMIN]);
    const authed = authChecker(mockedContext(user), [UserRole.ADMIN]);
    expect(authed).toEqual(true);
  });

  it(`should return false if user role doesn't match auth role`, () => {
    const user = mockedUser([UserRole.ADMIN]);
    const authed = authChecker(mockedContext(user), [UserRole.USER]);
    expect(authed).toEqual(false);
  });

  it('should return true if user role matches auth roles', () => {
    const user = mockedUser([UserRole.ADMIN]);
    const authed = authChecker(mockedContext(user), [
      UserRole.ADMIN,
      UserRole.USER,
    ]);
    expect(authed).toEqual(true);
  });

  it('should return true if user roles match auth role', () => {
    const user = mockedUser([UserRole.ADMIN, UserRole.USER]);
    const authed = authChecker(mockedContext(user), [UserRole.USER]);
    expect(authed).toEqual(true);
  });

  it('should return true if user roles match auth roles', () => {
    const user = mockedUser([UserRole.ADMIN, UserRole.USER]);
    const authed = authChecker(mockedContext(user), [
      UserRole.ADMIN,
      UserRole.USER,
    ]);
    expect(authed).toEqual(true);
  });
});
