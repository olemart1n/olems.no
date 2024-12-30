export function playBrickPopSound(audioContext: AudioContext, index: number) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const biquadFilter = audioContext.createBiquadFilter();
  console.log(200 + 100 * index);
  biquadFilter.type = "highpass"; // You can experiment with different filter types
  biquadFilter.frequency.value = 200 + 100 * index; // Set the frequency
  biquadFilter.gain.value = 55; // Boost the low frequencies

  oscillator.type = "sine"; // You can experiment with different wave types
  oscillator.frequency.value = 150;
  //   gainNode.gain.setValueAtTime(1, audioContext.currentTime); // Set the initial volume
  gainNode.gain.value = 2;

  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.2,
  ); // Fade out the volume

  // Connect the nodes
  oscillator.connect(biquadFilter);
  biquadFilter.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.5); // Stop the sound after 0.5 seconds
}

export function playBrickFallSound(audioContext: AudioContext) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const biquadFilter = audioContext.createBiquadFilter();
  console.log(2000);
  biquadFilter.type = "highpass"; // You can experiment with different filter types
  biquadFilter.frequency.value = 700; // Set the frequency
  biquadFilter.gain.value = 55; // Boost the low frequencies

  oscillator.type = "sine"; // You can experiment with different wave types
  oscillator.frequency.value = 90;
  //   gainNode.gain.setValueAtTime(1, audioContext.currentTime); // Set the initial volume
  gainNode.gain.value = 2;

  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.2,
  ); // Fade out the volume

  // Connect the nodes
  oscillator.connect(biquadFilter);
  biquadFilter.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.5); // Stop the sound after 0.5 seconds
}
