Template.countdown.helpers({
  hasAuctionBegun: function () {
    return Session.get('auctionHasBegun');
  },
  hasAuctionEnded: function () {
    return Session.get('auctionHasEnded');
  },
  auctionHoursRemaining: function () {
    return Session.get('auctionHoursRemaining');
  },
  auctionMinutesRemaining: function () {
    return Session.get('auctionMinutesRemaining');
  },
  auctionSecondsRemaining: function () {
    return Session.get('auctionSecondsRemaining');
  }
});
