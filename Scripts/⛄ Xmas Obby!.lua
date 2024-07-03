getgenv().farmer = true; --[["true" to activate and "false" to deactivate | Using this script for more than 1 minute will result in a ban!]]--

while wait() do
    if getgenv().farmer == true then
        game:GetService('ReplicatedStorage').StageChange:FireServer()
        game:GetService('ReplicatedStorage').PrestigeGUI:FireServer()
    end
end