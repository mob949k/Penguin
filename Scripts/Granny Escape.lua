local player = game.Players.LocalPlayer
local backpack = player.Backpack
        
for _, tool in ipairs(game:GetService("ReplicatedStorage").VipWeapons.VipTools:GetChildren()) do
local toolCopy = tool:Clone()
toolCopy.Parent = backpack
end