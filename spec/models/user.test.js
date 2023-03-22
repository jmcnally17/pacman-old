const mongoose = require("mongoose");
require("../mongodb_helper");
const User = require("../../models/user");

describe(User, () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has a username and password", () => {
    const bob = new User({
      username: "bob123",
      password: "thisisapassword",
    });

    expect(bob.username).toEqual("bob123");
    expect(bob.password).toEqual("thisisapassword");
  });

  it("can save a user", (done) => {
    const bob = new User({
      username: "bob123",
      password: "thisisapassword",
    });
    bob.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          username: "bob123",
          password: "thisisapassword",
        });
        done();
      });
    });
  });
});
