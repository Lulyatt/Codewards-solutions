// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// My code:



function combat(health, damage) {
 return Math.max(0, health - damage)
}