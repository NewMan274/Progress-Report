// Utility function to calculate metres done
function calculateMetresDone(startKm, startM, endKm, endM) {
  // Convert all to metres
  const startTotalMetres = parseInt(startKm || 0) * 1000 + parseInt(startM || 0);
  const endTotalMetres = parseInt(endKm || 0) * 1000 + parseInt(endM || 0);

  // Get absolute difference
  return Math.abs(endTotalMetres - startTotalMetres);
}

export default calculateMetresDone;