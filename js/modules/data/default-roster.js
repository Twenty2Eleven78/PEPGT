/**
 * Default Roster Configuration
 * @version 4.0
 * 
 * This file contains the default player roster.
 * You can customize this list by adding, removing, or modifying players.
 */

// Default roster configuration
export const DEFAULT_ROSTER_CONFIG = {
    // Team information
    teamName: 'Peterborough EP',
    season: '2025-2026',
    ageGroup: 'U12 Girls',

    // Default players list
    players: [
        { name: 'Player 1', shirtNumber: 1 },
        { name: 'Player 1', shirtNumber: 2 },
        { name: 'Player 1', shirtNumber: 3 }
    ]
};



// Utility functions for roster management
export const rosterUtils = {
    // Helper function to sort players alphabetically
    _sortPlayers(players) {
        return [...players].sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
        );
    },

    // Get default roster sorted alphabetically
    getDefaultRoster() {
        return this._sortPlayers(DEFAULT_ROSTER_CONFIG.players);
    }
};

// Export default roster for backward compatibility
export default DEFAULT_ROSTER_CONFIG;