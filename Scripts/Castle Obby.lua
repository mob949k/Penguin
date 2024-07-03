if game.PlaceId == 6346148611 then

    local Library = loadstring(game:HttpGet("https://raw.githubusercontent.com/xHeptc/Kavo-UI-Library/main/source.lua"))()
    local Window = Library.CreateLib("Magic Penguin War", "GrapeTheme")


--[GamePass]--
    local Main = Window:NewTab("Gamepass")
    local MainSection = Main:NewSection("Events")
    
    MainSection:NewButton("Gravity Coil", "25 Robux", function()
    game:service'ReplicatedStorage'.GravityCoilEvent:FireServer();
    end)

    MainSection:NewButton("Speed Coil", "25 Robux", function()
    game:service'ReplicatedStorage'.AccelerationCoilEvent:FireServer();
    end)

    MainSection:NewButton("Magic Carpet", "50 Robux", function()
    game:service'ReplicatedStorage'.RainbowMagicCarpetEvent:FireServer();
    end)


--[Local Player]--
    local Player = Window:NewTab("Local Player")
    local PlayerSection = Player:NewSection("Powers")
    PlayerSection:NewSlider("WalkSpeed", "Speed", 500, 16, function(s)
    game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = s
    end)

    PlayerSection:NewSlider("JumpPower", "Height", 500, 16, function(s)
    game.Players.LocalPlayer.Character.Humanoid.JumpPower = s
    end)

    PlayerSection:NewButton("Activate", "...", function()
    game.Players.LocalPlayer.Character.Humanoid.UseJumpPower = true
    end)

    PlayerSection:NewButton("Reset", "Predetermined", function()
    game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = 16
    game.Players.LocalPlayer.Character.Humanoid.JumpPower = 50
    end)
end