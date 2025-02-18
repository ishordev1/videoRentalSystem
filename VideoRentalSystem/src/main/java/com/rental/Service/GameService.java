package com.rental.Service;

import com.rental.Entity.Game;

import java.util.List;

public interface GameService {
    Game createGame(Game game);
    Game getGameById(Long id);
    List<Game> getAllGames();
    Game updateGame(Long id, Game gameDetails);
    void deleteGame(Long id);
}
