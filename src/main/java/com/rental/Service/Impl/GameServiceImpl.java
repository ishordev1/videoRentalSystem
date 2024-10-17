package com.rental.Service.Impl;

import com.rental.Entity.Game;
import com.rental.Exception.ResourceNotFoundException;
import com.rental.Repository.GameRepository;
import com.rental.Service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameServiceImpl implements GameService {

    @Autowired
    private GameRepository gameRepository;

    @Override
    public Game createGame(Game game) {
        return gameRepository.save(game);
    }

    @Override
    public Game getGameById(Long id) {
        return gameRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Game not found with id: " + id));
    }

    @Override
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    @Override
    public Game updateGame(Long id, Game gameDetails) {
        Game game = gameRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Game not found with id: " + id));

        game.setName(gameDetails.getName());
        game.setYear(gameDetails.getYear());
        game.setPlatform(gameDetails.getPlatform());
        game.setDiscs(gameDetails.getDiscs());
        game.setOnline(gameDetails.isOnline());
        game.setPrice(gameDetails.getPrice());
        game.setImgName(gameDetails.getImgName());
        game.setGameUrl(gameDetails.getGameUrl());

        return gameRepository.save(game);
    }

    @Override
    public void deleteGame(Long id) {
        Game game = gameRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Game not found with id: " + id));

        gameRepository.delete(game);
    }
}
