local Library = loadstring(game:HttpGet("https://raw.githubusercontent.com/xHeptc/Kavo-UI-Library/main/source.lua"))()
local Window = Library.CreateLib("Magic Penguin War", "GrapeTheme")
if game.PlaceId == 13681795330 then
    local Others = Window:NewTab("Others")
    local Section = Others:NewSection("Train")
    Section:NewButton("Activate", "...", function()
    getgenv().farmer = true;
    while wait() do
        if getgenv().farmer == true then
            game:service'ReplicatedStorage'.Remotes.PowerGain:FireServer()
        end
    end
    end)
    Section:NewButton("Deactivate", "...", function()
    getgenv().farmer = false;
    while wait() do
        if getgenv().farmer == true then
            game:service'ReplicatedStorage'.Remotes.PowerGain:FireServer()
        end
    end
    end)
    local Section = Others:NewSection("30M Egg")
    Section:NewButton("Buy", "...", function()
        local args = {
            [1] = "Hatch1",
            [2] = "30M",
            [3] = {}
        }
        game:GetService("ReplicatedStorage"):WaitForChild("Remotes"):WaitForChild("Hatch"):FireServer(unpack(args))
    end)
    local Tab = Window:NewTab("Worlds")
    local Section = Tab:NewSection("Teleport")
    Section:NewButton("Forest", "...", function()
        game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(26.162014, 3.2739718, -19.3619652, -1.11751719e-08, 7.19511846e-08, 1, -4.62763623e-08, 1, -7.19511846e-08, -1, -4.62763623e-08, -1.11751683e-08)
    end)
    Section:NewButton("Beach", "...", function()
        game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(631.853638, 803.51123, -122.222565, -1.79362113e-13, 1.78090183e-08, 1, 1.00759124e-07, 1, -1.78090183e-08, -1, 1.00759124e-07, -1.81156536e-13)
    end)
    Section:NewButton("Lava", "...", function()
        game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(1432.75366, 1603.50574, -122.422562, 1.69636627e-14, 5.39853451e-09, 1, -2.43530032e-08, 1, -5.39853451e-09, -1, -2.43530032e-08, 1.70951323e-14)
    end)
    Section:NewButton("Ancient", "...", function()
        game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(2107.03394, 2103.70532, -12.5375671, -8.82299503e-15, 3.42246542e-09, 1, 5.48828005e-08, 1, -3.42246542e-09, -1, 5.48828005e-08, -9.01082967e-15)
    end)
    Section:NewButton("Icey", "...", function()
        game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(3517.93408, 2553.70532, -12.5375671, -4.50838157e-15, -4.52796414e-08, 1, -2.15458007e-09, 1, 4.52796414e-08, -1, -2.15458007e-09, -4.60594028e-15)
    end)
    Section:NewButton("Space", "...", function()
        game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(5007.93408, 3744.30518, -12.5375671, -7.2874666e-15, -1.16950893e-08, 1, -4.11403036e-08, 1, 1.16950893e-08, -1, -4.11403036e-08, -7.76860587e-15)
    end)
    local Tab = Window:NewTab("Local Player")
    local Section = Tab:NewSection("Powers")
    Section:NewSlider("Walkspeed", "...", 500, 0, function(s)
        game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = s
    end)
    Section:NewSlider("Jumppower", "...", 500, 0, function(s)
        game.Players.LocalPlayer.Character.Humanoid.JumpPower = s
    end)
    Section:NewButton("Activate", "Enable Jumppower", function()
        game.Players.LocalPlayer.Character.Humanoid.UseJumpPower = true
    end)
end