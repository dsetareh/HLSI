function Label(sig, noise, value, n = null) {
  // snr == signal to noise ratio
  ["snr"].forEach(function (validVals) {
    // check if value requested is supported
    if (value === validVals) {
      // ! check
    }
  });

  if (!n) { // nullcheck
    n = document.createElement("OUTPUT");
    n.value = value;
    let p = document.createElement("p");
    p.appendChild(n);
    document.body.appendChild(p);
  }
  // maybe use a prefix?
  var prefix = "SNR: ";

  // TODO: can I give multiple of these?
  // TODO: or maybe set an entire signal to 'watched'

  //TODO: allow for dynamic linking to signals or variables that need to be 'watched' for updates
  sig.addSetterCallback("gn", function (sig, val) {
    let bwPercentage = (sig._bw - sig.bw_min) / (sig.bw_max - sig.bw_min);
    n.value = sig._gn - noise._gn - 10 * Math.log10(bwPercentage); // ! implementation...
  });

  sig.addSetterCallback("bw", function (sig, val) {
    let bwPercentage = (sig._bw - sig.bw_min) / (sig.bw_max - sig.bw_min);
    n.value = sig._gn - noise._gn - 10 * Math.log10(bwPercentage); // ! implementation...
  });

  noise.addSetterCallback("gn", function (sig, val) {
    let bwPercentage = (sig._bw - sig.bw_min) / (sig.bw_max - sig.bw_min);
    n.value = sig._gn - noise._gn - 10 * Math.log10(bwPercentage); // ! implementation...
  });

  function updateLabel() {}
}
